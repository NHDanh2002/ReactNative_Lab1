import { SafeAreaView, SectionList, StyleSheet, View, Text } from "react-native"
const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    name: {
        fontSize: 16,
    },
    separator: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1,
    },
    sectionHeader:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rgba(170, 170, 170)",
    }
});
const groupPeplebyLastname = (_data) => {
    const data = [..._data];
    const groupData = data.reduce((accumulator, item) =>{
        const group = item.name.last[0].toUpperCase();
        if(accumulator[group]){
            accumulator[group].data.push(item);
        }else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return accumulator
    }, {});
    const sections = Object.keys(groupData).map((key) => {
        return groupData[key];
    });
    return sections.sort((a,b) => {
        if(a.title > b.title){
            return 1;
        }
        return -1;
    });
};
const Project8 = () =>{
    return (
        <SafeAreaView style = {{marginTop:30}}>
            <SectionList
                sections={groupPeplebyLastname(PEOPLE)}
                keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                renderSectionHeader={({section}) =>{
                    return (
                        <View style = {styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    );
                }}
                renderItem={({item}) =>{
                    return (
                        <View style = {styles.row}>
                            <Text style = {styles.name}>{item.name.first} {item.name.last}</Text>
                        </View>
                    );
                }}
                ItemSeparatorComponent={() => <View style = {styles.separator}/>}
            />
        </SafeAreaView>
    );
};
export default Project8;
const PEOPLE = [
    {
        name: {
            title: "Ms",
            first: "Maeva",
            last: "Scott",
        },
    },
    {
        name: {
            title: "Ms",
            first: "Maelle",
            last: "Henrry",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Mohamound",
            last: "Faaij"
        },
    },
    {
        name: {
            title: "Mr",
            first: "John",
            last: "Smith"
        },
    },
    {
        name: {
            title: "Mr",
            first: "David",
            last: "Hood"
        },
    },
];