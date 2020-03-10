const CYPHER_LIMIT = 78
const A = 65
const Z = 90
const getCharCode = String.fromCharCode

const add = ( c ) => ( s ) => s.concat( c )
const isSpace = ( x ) => ( x === 32 )

const isInRange = ( min, max ) => ( x ) =>
  ( ( x >= min ) && ( x <= max ) )

const toCharCode = ( letter, i, str ) =>
  str.join( '' ).charCodeAt( i )

const getPosition = ( CYPHER_LENGTH ) => ( x ) =>
  ( x >= CYPHER_LIMIT ) ? x - CYPHER_LENGTH : x + CYPHER_LENGTH

const getCharCodeFromCypher = ( CYPHER_LENGTH ) => ( x ) =>
  ( isInRange( A, Z )( x ) ) ? getPosition( CYPHER_LENGTH )( x ) : x

const cypherThis = ( CYPHER_LENGTH ) => ( x, isSpace ) =>
  getCharCode( isSpace ? x : getCharCodeFromCypher( CYPHER_LENGTH )( x ) )

const toCypher = ( CYPHER_LENGTH ) => ( result, x, i ) =>
  add ( cypherThis( CYPHER_LENGTH )( x ), isSpace( x ) )( result )

const rot = ( CYPHER_LENGTH ) => ( str ) =>
  str.toUpperCase()
    .split( '' )
    .map( toCharCode )
    .reduce( toCypher( CYPHER_LENGTH ), '' )

console.log( rot( 13 )( 'LBH QVQ VG!' ) )