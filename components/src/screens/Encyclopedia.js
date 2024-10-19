import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { en } from './EncyclopediaScreen/en';
import { useTheme } from '../ThemeContext';

const Encyclopedia = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  const { isDarkMode } = useTheme();

  const handleCategoryPress = (categoryId) => {
    setExpandedCategory(expandedCategory == categoryId ? null : categoryId);
    setExpandedSubCategory(null); //Collapse subcategories when category is selected
  };

  const handleSubCategoryPress = (subCategoryId) => {
    setExpandedSubCategory(
      expandedSubCategory == subCategoryId ? null : subCategoryId
    );
  };

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333333', '#666666'] : ['#FF9FF3', '#FEC3A6']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Encyclopedia
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {en.categories.allIds.map((categoryId) => {
          const category = en.categories.byId[categoryId];
          if (!category) {
            console.warn(`Category with ID ${categoryId} not found.`);
            return null;
          }

          return (
            <View key={categoryId} style={styles.categoryContainer}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  isDarkMode && styles.darkCategoryButton,
                ]}
                onPress={() => handleCategoryPress(categoryId)}
              >
                <Text
                  style={[styles.categoryTitle, isDarkMode && styles.darkText]}
                >
                  {category.name} {category.tags.primary.emoji}
                </Text>
              </TouchableOpacity>

              {expandedCategory === categoryId && (
                <View style={styles.subCategoryContainer}>
                  {category.subCategories.map((subCategoryId) => {
                    const subCategory = en.subCategories.byId[subCategoryId];
                    if (!subCategory) {
                      console.warn(
                        `Subcategory with ID ${subCategoryId} not found.`
                      );
                      return null;
                    }

                    return (
                      <View key={subCategoryId} style={styles.subCategory}>
                        <TouchableOpacity
                          style={[
                            styles.subCategoryButton,
                            isDarkMode && styles.darkSubCategoryButton,
                          ]}
                          onPress={() => handleSubCategoryPress(subCategoryId)}
                        >
                          <Text
                            style={[
                              styles.subCategoryTitle,
                              isDarkMode && styles.darkText,
                            ]}
                          >
                            {subCategory.name}
                          </Text>
                        </TouchableOpacity>

                        {expandedSubCategory === subCategoryId && (
                          <View style={styles.articleContainer}>
                            {subCategory.articles.map((articleId) => {
                              const article = en.articles.byId[articleId];
                              if (!article) {
                                console.warn(
                                  `Article with ID ${articleId} not found.`
                                );
                                return null;
                              }

                              return (
                                <View
                                  key={articleId}
                                  style={[
                                    styles.article,
                                    isDarkMode && styles.darkArticle,
                                  ]}
                                >
                                  <Text
                                    style={[
                                      styles.articleTitle,
                                      isDarkMode && styles.darkArticleTitle,
                                    ]}
                                  >
                                    {article.title}
                                  </Text>
                                  <Text
                                    style={[
                                      styles.articleContent,
                                      isDarkMode && styles.darkText,
                                    ]}
                                  >
                                    {article.content}
                                  </Text>
                                </View>
                              );
                            })}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  categoryContainer: {
    marginBottom: 15,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subCategoryContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  subCategory: {
    marginBottom: 10,
  },
  subCategoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  articleContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  article: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF9FF3',
    marginBottom: 5,
  },
  articleContent: {
    fontSize: 12,
    color: '#333',
  },
  darkText: {
    color: '#FFFFFF',
  },
  darkCategoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  darkSubCategoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  darkArticle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  darkArticleTitle: {
    color: '#FF9FF3',
  },
});

export default Encyclopedia;
