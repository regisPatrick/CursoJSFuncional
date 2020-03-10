// const run = ( cb ) => cb( null, 'Regis' )
// const cb = ( err, data ) => {
//     if ( err ) throw err

//     return data
// }

// console.log( 'run: ', run( cb ) )

const run = ( cb ) => cb( new Error( 'DEU MERDA!' ) )
const cb = ( err, data ) => {
    if ( err ) throw err

    return data
}

console.log( 'run: ', run( cb ) )