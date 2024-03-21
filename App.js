import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./Limkokwing_Lesotho_Logo.jpg')}
          style={styles.schoolLogo}
        />
        <Text style={styles.school}>LIMKOKWING UNIVERSITY</Text>
      </View>
      
      <Image
        source={require('./Lesotho_flag.jpg')}
        style={styles.flag}
      />

      <View style={styles.profileInfo}>
        <Image
          source={require('./person-placeholder.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.profileHeader}>Student profile</Text>
        <View style={styles.details}>
          <Text style={styles.profile}>Names:</Text>
          <Text style={styles.name}>Keketso Kevin Makebe</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.profile}>Student number:</Text>
          <Text style={styles.number}>901016468</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.profile}>Current Semester:</Text>
          <Text style={styles.semester}>4</Text>
        </View>
        
      </View>
      <View style={styles.gradeContainer}>
        <Text style={styles.heading}>Semester Grades</Text>
      
        <View style={styles.grading}>
          <Text style={styles.module}>Mobile Device Progremming:</Text>
          <Text style={styles.grade}>A  </Text>
        </View>
        
        <View style={styles.grading}>
          <Text style={styles.module}>C++ Progremming II:</Text>
          <Text style={styles.grade}>B+</Text>
        </View>
        
        <View style={styles.grading}>
          <Text style={styles.module}>JAVA Progremming I:</Text>
          <Text style={styles.grade}>A- </Text>
        </View>

        <View style={styles.grading}>
          <Text style={styles.module}>Software Modeling:</Text>
          <Text style={styles.grade}>C  </Text>
        </View>
        
        <View style={styles.grading}>
          <Text style={styles.module}>Database System:</Text>
          <Text style={styles.grade}>C+</Text>
        </View>
        
        <View style={styles.grading}>
          <Text style={styles.module}>Probability and Statistics:</Text>
          <Text style={styles.grade}>B- </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
  },
  schoolLogo: {
    width: 350,
    height: 170,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  flag: {
    width: 350,
    height: 170,
    borderRadius: 10,
    alignSelf: 'center',
  },
  profileHeader: {
    alignSelf: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  school: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    opacity: 0.85,
  },
  profileInfo: {
    marginTop: -175,
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  number: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  semester: {
    fontSize: 16,
    color: 'white',
  },
  gradeContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  grading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  module: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  grade: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
});

export default ProfileScreen;