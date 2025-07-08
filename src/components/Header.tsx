import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logoIcon from '../assets/logo.png';     // bird icon
import logoText from '../assets/Union.png';   
import headerIcons from '../assets/Group312.png'; // 👈 single combined image

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left: Logo Icon + Text */}
      <View style={styles.logoContainer}>
        <Image source={logoIcon} style={styles.logoIcon} />
        <Image source={logoText} style={styles.logoText} />
      </View>

      {/* Right: Combined Icons */}
      <Image source={headerIcons} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 30,
    height: 29,
    resizeMode: 'contain',
    marginRight: 6,
  },
  logoText: {
    width: 77.38, // adjust based on image size
    height: 23.1,
    resizeMode: 'contain',
  },
  headerIcons: {
    width: 102,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Header;
