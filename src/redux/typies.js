export const selectDate = (date) => ({
    type:'SELECT_DATE',
    payload:date,
});
export const initialStateDate = { selectedDate:new Date() };

export const toggleConverterVisibility = () => ({ type:'TOGGLE_CONVERTER_VISIBILITY', });
export const hideConverter = () => ({ type:'HIDE_CONVERTER', });

