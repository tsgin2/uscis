import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const Card = (props) => {
  const {width, height} = Dimensions.get('window')
  let fontSizeOfquesSty = 19
  let fontSizeOfansSty = 18

  if (width == 1366 || height == 1366) {

    fontSizeOfquesSty = 39
    fontSizeOfansSty = 38
  } else if (width == 768 || height == 768) {
    fontSizeOfquesSty = 29
    fontSizeOfansSty = 28
  } else {}
  return (
    <TouchableOpacity onPress={() => props.flip()}
                      activeOpacity={0.8}
                      style={styles.container}>
          <View style={styles.topBar}>
            <Text style={[styles.quesSty, {fontSize: fontSizeOfquesSty}]}>{props.question}</Text>
          </View>
          <View style={styles.bottomBar}>
            <Text style={[styles.ansSty, {fontSize: fontSizeOfansSty, lineHeight: fontSizeOfansSty + 4}]}>{props.answer}</Text>
          </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  topBar: {
    flexGrow: 1,
    backgroundColor: 'rgb(0, 102, 102)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#7f8c8d',
  },
  bottomBar: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quesSty: {
    textAlign: 'center',
    //lineHeight: 3,
    color: '#ecf0f1',
    fontFamily: 'Times New Roman',
    padding: 7,
    // marginBottom: 5,

  },
  ansSty: {
    textAlign: 'center',
    color: '#34495e',
    fontFamily: 'Times New Roman',
    opacity: 9,

  }
})

export default Card
