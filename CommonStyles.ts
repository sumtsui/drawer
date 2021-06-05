const borderRadius = 10;
const screenPadding = 10;
const backgroundColor = 'white';
const bigSizeText = 30;
const smaillSizeText = 18;

export default {
  common: {
    borderRadius,
  },
  screen: {
    padding: screenPadding,
    flex: 1,
  },
  section: {
    borderRadius,
    backgroundColor,
    padding: 10,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    width: 'auto',
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  normalText: {
    fontSize: 20,
    color: 'black',
  },
  secondaryText: {
    fontSize: 16,
    color: 'gray',
  },
  bigSizeText,
  smaillSizeText,
  inputArea: {
    borderRadius: 5,
  },
  buttonBig: {
    backgroundColor: '#6bb37e',
    color: 'white',
    flex: 1,
    borderRadius,
    padding: 10,
  },
};
