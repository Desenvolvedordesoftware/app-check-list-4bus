import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {styles} from './styles';

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
                            rightTextStyle={{ fontSize: 16, color: isChecked.WithinTheStandard ? 'green' : 'black' }}
                            checkedCheckBoxColor='green'
                            uncheckedCheckBoxColor='black'
                        />

                        <CheckBox
                            isChecked={isChecked.Nonconforming}
                            onClick={() => setIsChecked({ ...isChecked, Nonconforming: !isChecked.Nonconforming })}
                            rightText='Não conforme'
                            rightTextStyle={{ fontSize: 16, color: isChecked.Nonconforming ? 'green' : 'black' }}
                            checkedCheckBoxColor='green'
                            uncheckedCheckBoxColor='black'
                        />

                        <CheckBox
                            isChecked={isChecked.NotApplicable}
                            onClick={() => setIsChecked({ ...isChecked, NotApplicable: !isChecked.NotApplicable })}
                            rightText='Não se aplica'
                            rightTextStyle={{ fontSize: 16, color: isChecked.NotApplicable ? 'green' : 'black' }}
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

