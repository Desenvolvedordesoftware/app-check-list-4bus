import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import CheckBox from 'react-native-check-box';

import * as Animatable from 'react-native-animatable';

export default function NewCheckList({ data }) {
    const [showValue, setShowValue] = useState(true);
    const [isChecked, setIsChecked] = useState({
        WithinTheStandard: false,
        Nonconforming: false,
        NotApplicable: false
    });

    return (
        <View style={styles.container} >
            <Text style={styles.description}>{data.items} ) {data.description}</Text>

            <View style={styles.content}>

                {showValue ? (
                    <View style={data.id === 0 ? styles.contentCheckBoxNone : styles.contentCheckBox} >

                        <CheckBox
                            isChecked={isChecked.WithinTheStandard}
                            onClick={() => setIsChecked({ ...isChecked, WithinTheStandard: !isChecked.WithinTheStandard })}
                            rightText='Dentro do padrão'
                            rightTextStyle={{ fontSize: 19, color: isChecked.WithinTheStandard ? 'green' : 'black', fontWeight: 'bold' }}
                            checkedCheckBoxColor='green'
                            uncheckedCheckBoxColor='black'
                        />

                        <CheckBox
                            isChecked={isChecked.Nonconforming}
                            onClick={() => setIsChecked({ ...isChecked, Nonconforming: !isChecked.Nonconforming })}
                            rightText='Não conforme'
                            rightTextStyle={{ fontSize: 19, color: isChecked.Nonconforming ? 'green' : 'black', fontWeight: 'bold' }}
                            checkedCheckBoxColor='green'
                            uncheckedCheckBoxColor='black'
                        />

                        <CheckBox
                            isChecked={isChecked.NotApplicable}
                            onClick={() => setIsChecked({ ...isChecked, NotApplicable: !isChecked.NotApplicable })}
                            rightText='Não se aplica'
                            rightTextStyle={{ fontSize: 19, color: isChecked.NotApplicable ? 'green' : 'black', fontWeight: 'bold' }}
                            checkedCheckBoxColor='green'
                            uncheckedCheckBoxColor='black'
                        />

                        <TextInput
                            placeholder='Observação / Medidas'
                            style={styles.input} />



                        <TouchableOpacity
                            onPress={() => setShowValue(!showValue)}
                            style={styles.button} >
                            <Animatable.Text
                                duration={2000}
                                animation="fadeInLeft"
                                style={styles.buttonText}>Gravar</Animatable.Text>
                        </TouchableOpacity>

                    </View>


                ) : (
                    <View>
                        <TouchableOpacity
                            onPress={() => setShowValue(!showValue)}
                            style={styles.button} >
                            <Animatable.Text
                                duration={2000}
                                animation="fadeInLeft"
                                style={styles.buttonText}>Alterar</Animatable.Text>
                        </TouchableOpacity>
                    </View>
                )}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 15,
    },
    content: {
        marginTop: 2,
        marginBottom: 8,
    },
    description: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    status: {
        fontSize: 18,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 18,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#02b3d4',
        borderRadius: 8,
    },
    accomplishedButton: {
        alignItems: 'center',
        marginRight: 10,
    },
    pendingButtom: {
        display: 'none',
        alignItems: 'center',
        marginRight: 10,
    },
    areaButtom: {
        height: 50,
        width: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentCheckBoxNone: {
        display: 'none',
        gap: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    contentCheckBox: {
        gap: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#02B3D4',
        height: 40,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        position: 'relative',
        backgroundColor: '#02B3D4',
        borderRadius: 50,
        paddingVertical: 15,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})