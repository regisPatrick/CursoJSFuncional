// const throwError = ( err ) => { throw err }
// const run = ( cb ) => cb( null, 'Regis' )

// const cb = ( err, data ) =>
//   ( err )
//     ? throwError( err )
//     : data

// console.log( 'run: ', run( cb ) )

const throwError = ( err ) => { throw err }
const run = ( cb ) => cb( new Error( 'DEU MERDA!' ) )

const cb = ( err, data ) =>
  ( err )
    ? throwError( err )
    : data

console.log( 'run: ', run( cb ) )