import { StyleProp, Text, TextStyle } from "react-native";

/**
 * Format the date using 'Intl.DateTimeFormat' avoiding using third party dependencies.
 * @param IDateTextParams
 * @returns JSX.Element
 */
const DateText = ({
  date,
  style,
}: {
  date: Date;
  style?: StyleProp<TextStyle>;
}) => {
  //TODO: Pass by parameters more countries to get format for each region.
  const _date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date(date));
  return <Text style={style}>{_date}</Text>;
};

export default DateText;
