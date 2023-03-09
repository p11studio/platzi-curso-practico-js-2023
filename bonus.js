function conseguirTipoSuscripcion (suscripcion) {
    if (suscripcion == 'Free') {
    console. log ("Solo puedes tomar los cursos gratis");
    return
    }
    if (suscripcion == 'Basic') {
    console. log ("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return
    }else if (suscripcion == 'Expert') {
    console. log ("Puedes tomar casi todos los cursos de Platzi durante un año");
    return
    } else if (suscripcion == 'ExpertDuo') {
    console. log ("Tú y alquien más pueden tomar TODOS los cursos de Platzi durante un año");
    return
    }
    console.warn('Ese tipo de suscripcion no existe')
}
conseguirTipoSuscripcion('Free')
conseguirTipoSuscripcion('Basic')
conseguirTipoSuscripcion('Expert')
conseguirTipoSuscripcion('ExpertDuo')

const tiposDeSuscripcion = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alquien más pueden tomar TODOS los cursos de Platzi durante un año',
}

tiposDeSuscripcion.free

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripcion[suscripcion]) {
        console.log(tiposDeSuscripcion[suscripcion])
        return
    }
    console.warn('Ese tipo de suscripcion no existe')
}

conseguirTipoSuscripcion('free')
conseguirTipoSuscripcion('basic')
conseguirTipoSuscripcion('expert')
conseguirTipoSuscripcion('expertduo')
conseguirTipoSuscripcion('alalal')