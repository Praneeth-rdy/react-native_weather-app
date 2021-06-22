import { StyleSheet, Dimensions } from "react-native";

export default Styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    bgImage: {
        height: Dimensions.get('window').height,
    },
    bgContainer: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    cityText: {
        textTransform: 'uppercase',
        color: 'white',
    },
    temperatureText: {
        color: 'white',
        fontSize: 90,
        lineHeight: 100,
        fontWeight: '900',
    },
    weatherStatContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        padding: 18,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    weatherStat: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    weatherStatHeading: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
    },
});