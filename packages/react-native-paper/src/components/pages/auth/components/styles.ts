import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: Dimensions.get("window").width * .9,
        maxWidth: 450,
        padding: 29,
        gap: 12,
        borderRadius: 10,
        marginTop: -50,
    },
    title: {

    }
})