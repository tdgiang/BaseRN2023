import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Platform,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import R from '../../assets/R';
import {
  WIDTHXD,
  getFontXD,
  HEIGHTXD,
  getHeight,
  WIDTHXDICON,
  HEIGHT,
  WIDTH,
} from '../../config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [];
/**
 * This Function to show piker with list date (for example [{name:'Picker1'},{name:'Picker2}])
 * @callback onValueChange return value of item you choice
 * @param value value of picker you choice
 * @param defaultIndex defaultIndex of picker you choice
 * @param containerStyle custom containerStyle of view
 * @param data data value of date
 * @param width width of picker
 * @param height height of picker
 * @param date value of date you choice
 * @param heightItem height of picker Item
 * @param maxHeight set height of list
 * @param iconDropdown to set icon for dropdown
 * @param iconDropdownStyle to style icon dropdown
 * other you can make minDate,maxDate... with props of libary react-native-datepicker
 */
export default class PickerItem extends Component {
  constructor(props) {
    super(props);
    this._button = null;
    this._buttonFrame = null;
    this.state = {
      value: '',
      showInBottom: true,
    };
  }

  componentDidMount() {
    this._dropdown.select(0);
  }

  _dropdownAdjustFrame = style => {
    const {showInBottom} = this.state;
    // alert(showInBottom);
    let stylez = style;
    if (!showInBottom) {
      stylez.height += HEIGHTXD(99) * (6 - Math.min(this.props.data.length, 5));
    } else {
      stylez.height += HEIGHTXD(99);
    }
    // stylez.left += 150;
    return stylez;
  };

  render() {
    const {
      width,
      onValueChange,
      containerStyle,
      height,
      value,
      defaultValue,
      data,
      defaultIndex,
      iconDropdown,
      iconDropdownStyle,
      disabled,
      isTriangle,
      textStyle,
      iconSize,
      iconColor,
    } = this.props;

    return (
      <View style={styles.cell}>
        <TouchableOpacity
          disabled={disabled}
          ref={button => {
            this._button = button;
          }}
          onPress={() => {
            this._dropdown.show();
            // this._updatePosition();
          }}
          style={[
            styles.pickerStyle,
            containerStyle !== null && containerStyle,
            height && {height},
            width && {width},
          ]}>
          <Text
            numberOfLines={1}
            style={[
              styles.dropdown_row_text,
              width && {width: width - WIDTHXD(125)},
              textStyle ? textStyle : {},
            ]}>
            {defaultValue || this.state.value}
          </Text>
          {iconDropdown || isTriangle ? (
            <Icon
              name={'up'}
              size={iconSize ? iconSize : 20}
              color={iconColor ? iconColor : R.colors.borderGray}
            />
          ) : (
            <Icon
              name={'down'}
              size={iconSize ? iconSize : 20}
              color={iconColor ? iconColor : R.colors.borderGray}
            />
          )}
        </TouchableOpacity>
        <ModalDropdown
          showsVerticalScrollIndicator={false}
          saveScrollPosition={false}
          ref={el => {
            this._dropdown = el;
          }}
          style={[styles.dropdown, width && {width}]}
          defaultValue={defaultValue || '0'}
          defaultIndex={defaultIndex || 0}
          textStyle={styles.dropdown_text}
          dropdownStyle={[
            styles.dropdown_dropdown,
            {maxHeight: HEIGHTXD(99 * Math.min(data.length, 6) + 12)},
            width && {width},
          ]}
          options={data !== null && data}
          onSelect={value => {
            onValueChange && onValueChange(value, data[value]);
            this.setState({value: data[value].name});
          }}
          renderRow={(option, index, isSelected) => (
            <View
              style={[
                styles.dropdown_row,
                {
                  backgroundColor:
                    option.value == value?.value ? '#C0C0C0' : '#f2f2f2',
                },
              ]}>
              <Text
                numberOfLines={1}
                style={[
                  styles.dropdown_row_text,
                  {
                    marginHorizontal: WIDTHXD(30),
                    // color: option.value == value?.value ? 'black' : 'black',
                    // fontWeight: option.value == value?.value ? '700' : '400',
                    fontWeight: '400',
                    color: 'black',
                  },
                ]}>
                {`${option.name}`}
              </Text>
            </View>
          )}
          renderButtonText={rowData => this.renderButtonText(rowData)}
          // adjustFrame={(style) => this._dropdownAdjustFrame(style)}
          // renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
        />
      </View>
    );
  }

  renderButtonText = () => ' ';

  renderSeparator = rowID => {
    if (rowID === data.length - 1) {
      return [];
    }
    let key = `spr_${rowID}`;
    return <View style={styles.dropdown_separator} key={key} />;
  };
}

const styles = StyleSheet.create({
  cell: {
    flex: 0,
  },
  dropdown: {
    alignSelf: 'center',
    width: '100%',
    height: HEIGHTXD(0),
  },
  dropdown_text: {
    fontSize: 16,
  },
  dropdown_dropdown: {
    width: '100%',
    maxHeight: HEIGHTXD(200),
    borderBottomLeftRadius: WIDTHXD(20),
    borderBottomRightRadius: WIDTHXD(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: Platform.OS == 'ios' ? 0 : -21,
  },
  dropdown_row: {
    flexDirection: 'row',
    height: HEIGHTXD(100),
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dropdown_row_text: {
    // marginHorizontal: 4,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  dropdown_separator: {
    borderBottomWidth: 0.3,
    borderBottomColor: R.colors.iconGray,
  },
  pickerStyle: {
    width: '100%',
    height: HEIGHT(40),
    flexDirection: 'row',
    paddingHorizontal: WIDTH(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: R.colors.borderGray,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
