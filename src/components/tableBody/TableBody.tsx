import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonSkill } from "./styles";
import { DataTable } from 'react-native-paper';
interface SkillCardProps extends TouchableOpacityProps{
    cod: string;
    name: string;
}

  export function TableBody({cod, name,...rest}:SkillCardProps) {
    return (
        <ButtonSkill {...rest}>
            <DataTable.Row>
              <DataTable.Cell>{cod}</DataTable.Cell>
              <DataTable.Cell>{name}</DataTable.Cell>
            </DataTable.Row> 
          </ButtonSkill>
    );
  }
  