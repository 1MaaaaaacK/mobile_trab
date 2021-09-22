import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonSkill } from "./styles";
import { DataTable } from 'react-native-paper';

  export function TableHeader({...rest}) {
    return (
      <ButtonSkill {...rest}>
           <DataTable.Header >
                <DataTable.Title>Código</DataTable.Title>
                <DataTable.Title>Nome</DataTable.Title>
            </DataTable.Header>
      </ButtonSkill>
    );
  }
  