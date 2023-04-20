import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false)

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)} >
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={data.type === 1 ? styles.status : styles.expenses}>
                    {data.status}
                </Text>

                {showValue ? (
                    <TouchableOpacity style={data.type === 1 ? styles.pendingButtom : styles.accomplishedButton} >
                        <View style={styles.areaButtom}>
                            <AntDesign name="edit" size={30} color='#02b3d4' />
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

