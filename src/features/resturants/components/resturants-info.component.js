import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { food } from "../../../../assets/food.webp"

const ResturantInfoCard = ({ resturant = {} }) =>{ 
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "../../../../../assets/icon.png"
        ],
        address = '100 some random street',
        isOpen = true,
        rating = 4,
        isClosedTemporarily
    } = resturant
    return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: "../t../../../assets/food.webp"}}/>
        <Text>{name}</Text>
    </Card>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: { padding: 20 },
    title: { }
});

export default ResturantInfoCard;