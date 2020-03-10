function rot13 ( str ) { //LBH QVQ VG!
    const valoresUnicode = []
    
    for ( let i in str ) {
        valoresUnicode.push( str.charCodeAt( i ) )
    }

    var str13 = valoresUnicode.map( ( x )  => {
        if ( x === 32 ) return String.fromCharCode( x )
        if ( x >= 65 && x <= 90 ) {
            if ( x >= 78 ) return String.fromCharCode( x - 13 )
            if ( x <= 78 ) return String.fromCharCode( x + 13 )
        } else {
            return  String.fromCharCode( x )
        }    
    } ).join( '' )
    return str13    
    } 

    console.log( rot13( 'LBH QVQ VG!' ) )
