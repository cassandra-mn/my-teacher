import { Button } from "@mui/material";
import { Teacher } from "../../../@types/teacher";
import { Container, Description, Item, Name, NoList, Photo, Value } from "./List.style";

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
}

const List = (props: ListProps) => {
    return (
        <>{props.teachers.length > 0 ? (
            <Container>
                {props.teachers.map(teacher => {
                    const {id, photo, name, value, description} = teacher;
                    return (
                        <Item key={id}>
                            <Photo src={photo}/>
                            <div>
                                <Name>{name}</Name>
                                <Value>{value.toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Value>
                                <Description>{description}</Description>
                                <Button onClick={() => props.onSelect(teacher)} sx={{width: '70%'}}>Marcar aula com {name}</Button>
                            </div>
                        </Item>
                    );
                })}
            </Container>
            ) : 
            <NoList>Nenhum professor encontrado</NoList>
        }</>
    );
}

export default List;
