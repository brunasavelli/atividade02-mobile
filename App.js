import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen({  }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Enrolados</Text>
            <Image source={require("./public/enrolados.jpg")} style={styles.imagem} />
            <Text style={styles.texto}>
            "Enrolados" conta a história de Rapunzel, uma princesa com cabelos mágicos, trancada em uma torre por Madre Gothel. Ela conhece Flynn Rider e juntos embarcam em uma aventura para ver as luzes flutuantes. Rapunzel descobre seu passado e luta por sua liberdade. O filme aborda temas como autodescoberta, coragem e amor verdadeiro.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "#D3BBDD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 32,
        fontWeight: "800",
        textAlign: "center",
        color: "#613659",
    },
    imagem: {
        width: 450,
        height: 300,
    },
    texto: {
        fontSize: 18,
        textAlign: "center",
        color: "#000",
        width: 500,
    }
});