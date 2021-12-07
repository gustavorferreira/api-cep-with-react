import { useState} from "react";

export function Cep() {
    const [cep, setCep] = useState("");

    function getValue(e) {
        e.preventDefault();
        const inputValue = e.target.value

        if (inputValue.length === 0) {
            setCep("");
        }

        if (!parseInt(inputValue)) {
            e.target.value = "";
        }

        if (!isNaN(inputValue) === false) {
            e.target.value = "";
        }

        if (!inputValue.length === 8 || !parseInt(inputValue)) {
            return;
        }
        return setCep(inputValue);
    }

    function getCep() {
        const fetchData = async () => {

            if (cep.length === 0) {
                return;
            }

            if (!isNaN(cep) === false) {
                return;
            }

            if (cep.length < 8 || cep.length > 8 || cep.length === undefined) {
                return;
            }

            const response = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            if (response.status === 200) {
                const data = await response.json();
                const dataPromise = JSON.parse(JSON.stringify(data));

                if (dataPromise !== true) {
                    setCep(dataPromise);
                }
            }
        };
        fetchData();
    }

    return(
        <div>
            <label>CEP: </label>
            <input
                type='text'
                placeholder='Informe um cep'
                minLength='8'
                maxLength='8'
                onChange={getValue}
            />
            <button type='submit' onClick={getCep}>Buscar</button>
            <br/>
            <div>
                {cep.cep && (
                    <table>
                        <thead>
                        <tr>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Localidade</th>
                            <th>UF</th>
                            <th>DDD</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{cep.cep}</td>
                            <td>{cep.logradouro}</td>
                            <td>{cep.complemento}</td>
                            <td>{cep.bairro}</td>
                            <td>{cep.localidade}</td>
                            <td>{cep.uf}</td>
                            <td>{cep.ddd}</td>
                        </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}