import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';

const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'X'];

type MyProps = {
  pinLength?: any;
  getPinKeyPadValue?: any;
  getButtonValue?: any;
  customHeader?: any;
  titleStyle?: any;
  showInputedValue?: any;
  titleText?: any;
  subtitleStyle?: any;
  activePinInputColor?: any;
  subTitle?: any;
  moneyInput?: any;
  keyBackColor?: any;
  showDot?: any;
  keypadButtonStyle?: any;
  keypadButtonTextStyle?: any;
  showCurrency?: any;
  navigation?: any;
  showBackBtn?: any;
  inactivePinInputColor?: any;
  xColor?: any;
};

type MyState = {
  pin: any;
  pinLength: any;
  inputWidth: any;
};

export default class PinKeyPad extends Component<MyProps, MyState> {
  state = {
    pin: [],
    pinLength: null,
    inputWidth: 0,
  };

  UNSAFE_componentWillMount() {
    let arrayLength = this.props.pinLength;
    if (arrayLength) {
      let pinLength = [];
      let count = 0;
      do {
        pinLength.push('');
        count++;
      } while (count < arrayLength);
      this.setState({pinLength});
    }
  }

  componentDidUpdate(nextProps: any) {
    let pin = this.state.pin;
    this.props.getPinKeyPadValue(pin.join().replace(/,/g, ''));
  }

  onLayout = (e: any) => {
    const {width, y, x, height} = e.nativeEvent.layout;
    this.setState({inputWidth: width});
  };

  render() {
    let {pin, inputWidth} = this.state;
    let formattedInput;
    let decimal;
    // if (this.props.moneyInput) {
    //   formattedInput = formatMoney(pin.join().replace(/,/g, ""));
    //   decimal = formattedInput.split(".");
    //   formattedInput = [decimal[0]];
    //   decimal = decimal[1];
    // } else {
    formattedInput = pin;
    // }
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            //alignItems: "center",
            paddingVertical: RFValue(20),
            paddingHorizontal: RFValue(16),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {this.props.showBackBtn && (
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  left: 0,
                }}></TouchableOpacity>
            )}
            {!this.props.customHeader && (
              <Text style={{...style.title, ...this.props.titleStyle}}>
                {this.props.titleText}
              </Text>
            )}
          </View>
          {!this.props.customHeader && (
            <Text
              style={{
                ...style.subTitle,
                ...this.props.subtitleStyle,
                marginTop: RFValue(10),
              }}>
              {this.props.subTitle}
            </Text>
          )}
          {this.props.customHeader && this.props.customHeader()}
          <View
            style={{
              marginVertical: RFValue(20),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* Empty fields */}
            {!this.props.moneyInput && (
              <View
                style={{
                  flexDirection: 'row',
                }}
                onLayout={this.onLayout}>
                {this.state.pinLength &&
                  this.state?.pinLength?.map((item, i) => (
                    <View
                      key={i + 50}
                      style={{
                        height: RFValue(10),
                        width: RFValue(10),
                        borderRadius: RFValue(5),
                        backgroundColor:
                          this.props.inactivePinInputColor || '#F9F9F999',
                        marginHorizontal: RFValue(10),
                      }}
                    />
                  ))}
                {!this.state.pinLength &&
                  ['', '', '', ''].map((item, i) => (
                    <View
                      key={i + 10}
                      style={{
                        height: RFValue(10),
                        width: RFValue(10),
                        borderRadius: RFValue(5),
                        backgroundColor:
                          this.props.inactivePinInputColor || '#F9F9F999',
                        marginHorizontal: RFValue(10),
                      }}
                    />
                  ))}
              </View>
            )}
            {/* Inputed fields */}
            <View
              style={{
                position: 'absolute',
                width: inputWidth,
              }}>
              {!this.props.showInputedValue && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                  }}>
                  {this.state.pin.length > 0 &&
                    this.state.pin.map((item, i) => (
                      <View
                        key={i + 20}
                        style={{
                          height: RFValue(10),
                          width: RFValue(10),
                          borderRadius: RFValue(5),
                          backgroundColor:
                            this.props.activePinInputColor || '#ffffff',
                          marginHorizontal: RFValue(10),
                        }}
                      />
                    ))}
                </View>
              )}
            </View>
            {this.props.showInputedValue && (
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'flex-end',
                  backgroundColor: '#F9FCFF',
                }}>
                {this.props.moneyInput && (
                  <Text
                    style={{
                      color: this.props.activePinInputColor,
                      fontFamily: 'BentonSans-Bold',
                      fontSize: RFValue(20),
                      lineHeight: RFValue(30),
                    }}>
                    {this.props.showCurrency === 'USD' ? '\u0024' : '\u20A6'}
                  </Text>
                )}
                {this.props.showInputedValue &&
                  formattedInput.length > 0 &&
                  formattedInput.map((item, i) => (
                    <Text
                      key={i + 30}
                      style={{
                        color: this.props.activePinInputColor,
                        fontFamily: 'BentonSans-Bold',
                        fontSize: RFValue(30),
                        marginHorizontal: this.props.moneyInput
                          ? 0
                          : RFValue(6),
                      }}>
                      {item}
                    </Text>
                  ))}
                {this.props.moneyInput && (
                  <Text
                    style={{
                      color: this.props.activePinInputColor,
                      fontFamily: 'BentonSans-Bold',
                      fontSize: RFValue(20),
                      lineHeight: RFValue(25),
                    }}>
                    .{decimal}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            flex: 3,
            paddingHorizontal: RFValue(40),
            justifyContent: 'center',
          }}>
          <FlatList
            data={keypad}
            numColumns={3}
            contentContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
            }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={item => (
              <_KeyPadItem
                xColor={this.props.xColor}
                keyBackColor={this.props.keyBackColor}
                keyVal={item}
                showDot={this.props.showDot}
                getButtonValue={this.props.getButtonValue}
                getPinKeyPadValue={this.props.getPinKeyPadValue}
                setPin={this._setPin}
                resetPin={this._resetPin}
                deletePin={this._deletePin}
                keypadButtonStyle={this.props.keypadButtonStyle}
                keypadButtonTextStyle={this.props.keypadButtonTextStyle}
                showCurrency={this.props.showCurrency}
              />
            )}
          />
        </View>
      </View>
    );
  }

  _setPin = (pin: any) => {
    let newPin = this.state.pin;
    if (this.state.pinLength) {
      if (newPin.length > this.state.pinLength.length - 1) return;
    } else {
      if (newPin.length > 3) return;
    }
    newPin.push(pin);
    let dotOccurrence = 0;
    pin = newPin
      .map(am => {
        if (am === '.' && dotOccurrence < 1) {
          dotOccurrence = 1;
          return am;
        }
        if (am !== '.') {
          return am;
        }
      })
      .filter(i => i != undefined);
    this.setState({pin});
  };

  _resetPin = () => {
    this.setState({pin: []});
  };

  _deletePin = () => {
    let newPin = this.state.pin;
    if (newPin[newPin.length - 1] === '.') {
      newPin.splice(newPin.length - 2, 2);
    } else {
      newPin.pop();
    }
    this.setState({pin: newPin});
  };
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(16),
    color: 'white',
    textAlign: 'center',
    lineHeight: RFValue(20),
  },
  subTitle: {
    fontFamily: 'BentonSans',
    fontSize: RFValue(16),
    color: 'white',
    textAlign: 'center',
  },
});

const _KeyPadItem = (props: any) => {
  if (props.keyVal.item === '.') {
    return props.showDot ? (
      <View
        style={{
          flex: 1,
          //borderColor: props.borderColor || "#F9F9F999",
          ...props.keypadButtonStyle,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            margin: RFValue(8),
            paddingVertical: RFValue(2),
            ...buttonBorderStyle(props.keyVal.index),
          }}
          onPress={() => props.setPin(props.keyVal.item)}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'BentonSans-Medium',
              color: 'white',
              fontSize: RFValue(30),
              ...props.keypadButtonTextStyle,
            }}>
            {props.keyVal.item}
          </Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{flex: 1}} />
    );
  } else if (props.keyVal.item == 'X') {
    return (
      <View
        style={{
          flex: 1,
          ...props.keypadButtonStyle,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            margin: RFValue(12),
            paddingVertical: RFValue(15),
            ...buttonBorderStyle(9),
          }}
          onPress={() => props.deletePin()}>
          <Icon name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          ...props.keypadButtonStyle,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            margin: RFValue(8),
            backgroundColor: props.keyBackColor || 'rgba(255,255,255,0.2)',
            ...buttonBorderStyle(props.keyVal.index),
          }}
          onPress={() => {
            props.getButtonValue && props.getButtonValue(props.keyVal.item);
            props.setPin(props.keyVal.item);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'BentonSans-Medium',
              color: 'white',
              fontSize: RFValue(28),
              ...props.keypadButtonTextStyle,
            }}>
            {props.keyVal.item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const buttonBorderStyle = (index: any) => {
  if (index == 1 || index == 4 || index == 7) {
    return {
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
    };
  } else if (index == 10) {
    return {
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
    };
  } else if (index == 0 || index == 3 || index == 6) {
    return {
      justifyContent: 'center',
      alignSelf: 'flex-start',
      alignContent: 'center',
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
    };
  } else if (index == 2 || index == 5 || index == 8) {
    return {
      justifyContent: 'center',
      alignSelf: 'flex-end',
      alignContent: 'center',
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
    };
  } else if (index == 11) {
    return {
      justifyContent: 'center',
      alignSelf: 'flex-end',
      alignContent: 'center',
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
    };
  }
};
