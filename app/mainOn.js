let skill = []
const endPointAPI = '' /* colocar o link do banco de dados.json */
getSeachDateAPI()
const elementInsert = document.getElementById('Id do elemento')

async function getSeachDateAPI() {
    const response = await fetch(endPointAPI)
    skill = await response.json()
    let skillsWeak = applicationWeak(skills)
    showInWindowns(skillsWeak) /*habilidades enfraquecendo */
    
};
function showInWindowns(skillList){
    skillList.array.forEach(element => {
        elementInsert.innerHTML += `
        <div class="skillItem">
        <img class="skill__imgs" src="${skill.imagem}"
        alt="${skill.alt}" />
        <h2> class="skill__title">
        ${skill.title}</h2>
        <p class="skill__discription">${skill.value.toFixed(2)}</p>
        <p class="skill__icon"  id="icons">${skill.icons}</p>
        <div class="tags">
            <span class="tag">${skill.category}</span>
        
        </div>
        `
    });
};
/*função de desconto nos valores conforme evolução*/
function applicationWeak(skills){
    const valueWeak = 0.3;
    skillsWeak = skills.map(skill =>{
        return {...skill, value: skill.value - (skill.value * valueWeak)}
    })
    return applicationWeak

}

/*categorias de formação */
const formacoes = ['graduacao', 'especializacao', 'mba', 'mestrado', 'phd', 'doutorado', 'pos_doutorado', 'livre_docencia'];
const modalidades = ['licenciatura', 'bacharelado', 'tecnologo'];
const tipologias = ['profissional', 'academico'];

function validarFormacao(valor) {
    return valor >= 0 && valor <= 8;
}

function validarModalidade(valor) {
    return valor >= 0 && valor <= 2;
}

function validarTipologia(valor) {
    return valor >= 0 && valor <= 1;
}

function validarNatureza(grau, natureza) {
    if (grau === 0) {
        return natureza >= 0 && natureza <= 2;
    } else if (grau >= 1 && grau <= 2) {
        return natureza === 0 || natureza === 1;
    } else if (grau >= 3 && grau <= 8) {
        return natureza === 0 || natureza === 1;
    }
    return false;
}

function validarAbrangencia(grau, natureza, abrangencia) {
    if (grau === 0) {
        if (natureza === 0) {
            return abrangencia === 1;
        } else if (natureza === 1 || natureza === 2) {
            return abrangencia === 1;
        }
    } else if (grau >= 1 && grau <= 2) {
        if (natureza === 1) {
            return abrangencia === 1;
        } else if (natureza === 0) {
            return abrangencia === 0;
        }
    } else if (grau >= 3 && grau <= 8) {
        return abrangencia === 0 || abrangencia === 1;
    }
    return false;
}

// Exemplos de chamadas de funções:
const grau = 0;
const natureza = 1;
const abrangencia = 1;

if (validarFormacao(grau) && validarModalidade(natureza) && validarTipologia(abrangencia)) {
    if (validarNatureza(grau, natureza) && validarAbrangencia(grau, natureza, abrangencia)) {
        console.log("Valores válidos:", { grau: formacoes[grau], natureza: modalidades[natureza], abrangencia: tipologias[abrangencia] });
    } else {
        console.log("Dependências inválidas entre grau, natureza e abrangencia.");
    }
} else {
    console.log("Valores fora dos intervalos permitidos.");
}
