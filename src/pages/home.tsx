import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../components/button/Button';
import { TableBody } from '../components/tableBody/TableBody';
import { Container, Input, Title } from './styles';
import { TableHeader } from '../components/tableHeader/TableHeader';

interface RegistrationInterface {
    codigo: string;
    name: string;
}

export function Home() {
    const [escolaridade, setEscolaridade] = useState({codigo: '', name: ''})
    const [escolaridadeArray, setEscolaridadeArray] = useState<RegistrationInterface[]>([])

    function addNewEscolaridade(){

        if(Object.values(escolaridade).find(m => m == '') == ''){
            return alert('Você deve preencher todos os campos!');
        }
        if(escolaridadeArray.find(m => m.codigo == escolaridade.codigo)){
            return alert('Já existe uma escolaridade com esse ID!')
        }

        const data = {
            codigo: escolaridade.codigo,
            name: escolaridade.name
        }
          
        setEscolaridadeArray([...escolaridadeArray, data])
        setEscolaridade({codigo: '', name: ''})
        
        
    }  

    function RemoveEscolaridade(id: string) {
        setEscolaridadeArray(escolaridadeArray.filter(skill => skill.codigo !== id))
    }

    useEffect(() => {
        async function loadData() {
            const escolaridades = await AsyncStorage.getItem('@escolaridades')

            if(escolaridades){
                setEscolaridadeArray(JSON.parse(escolaridades))
            }
        }
        loadData()

    }, [])

    useEffect(() => {
        async function saveData() {
            await AsyncStorage.setItem('@escolaridades', JSON.stringify(escolaridadeArray))
        }
        saveData()
    }, [escolaridadeArray])

  return (
    <>
    <Container>
   
        <Title>Cadastro de Escolaridades</Title>

        <Input 
        placeholder='Código' 
        placeholderTextColor='#555'
        value={escolaridade.codigo}
        onChangeText={values =>setEscolaridade({...escolaridade, codigo: values})}
        />
         <Input 
        placeholder='Nome' 
        placeholderTextColor='#555'
        value={escolaridade.name}
        onChangeText={values =>setEscolaridade({...escolaridade, name: values})}
        />
 
        <Button  
            title='ADD' 
            onPress={addNewEscolaridade}
        />

            <TableHeader/>
            <FlatList showsVerticalScrollIndicator={false}
                data={escolaridadeArray}
                keyExtractor={item=> item.codigo}
                renderItem={({item}) => (

                    <TableBody 
                    cod={item.codigo}
                    
                    name={item.name}
                    onPress={() => RemoveEscolaridade(item.codigo)}
                    
                    />
                )}
            /> 
    
    </Container>
    </>
  );
}