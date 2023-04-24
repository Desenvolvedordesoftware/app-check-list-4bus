import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Movements({ data }) {
    const navigation = useNavigation();
    const [showValue, setShowValue] = useState(true)

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)} >
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={data.type === 1 ? styles.status : styles.expenses}>
                    {data.status}
                </Text>

                {showValue ? (
                    <TouchableOpacity style={data.type === 1 ? styles.pendingButtom : styles.accomplishedButton}  >
                        <View style={styles.areaButtom}>
                            <MaterialCommunityIcons onPress={() => navigation.navigate('CheckList')}
                            name="book-clock-outline" size={30} color='#e74c3c'/>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <View
                        style={styles.skeleton}
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'timing' }}
                    />
                )}

            </View>
        </TouchableOpacity>
    );
}

