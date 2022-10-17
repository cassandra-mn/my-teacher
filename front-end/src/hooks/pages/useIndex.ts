import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [data, setData] = useState({
        name: '', 
        email: ''
    });
    const [teacherSelected, setTeacherSelected] = useState<Teacher | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/teachers')
          .then(response => setTeachers(response.data))
          .catch(e => alert('Houve um erro, tente novamente mais tarde!'));      
        
        clearForm();
    }, [teacherSelected]);

    function selectClass() {
        if (teacherSelected) {
            if (validation()) {
                ApiService.post('/teachers/' + teacherSelected.id + '/classroom', {
                    name: data.name, 
                    email: data.email
                }).then(() => {
                    setTeacherSelected(null);
                    setMessage('Aula marcada com sucesso');
                }).catch((e) => {
                    alert(e.response?.data.message);
                });
            } else {
                setMessage('Preencha os dados corretamente');
            }
        }
    }

    function validation() {
        return data.name.length > 0 && data.email.length > 0;
    }

    function clearForm() {
        setData({name: '', email: ''});
    }

    return {
        teachers,
        data,
        setData,
        teacherSelected,
        setTeacherSelected,
        selectClass,
        message, 
        setMessage
    };
}