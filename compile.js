const sass = require('sass');
const  fs = require('fs');

console.log('Compilando arquivos...')

sass.render({
 file: './app.scss',
 outputStyle:'compressed',
 includePaths:['./node_modules/']
},(err,result)=>{
 if(err){
	console.log('Erro:')
	throw new Error(err)
 }
 else{
	console.log('Compilado com sucesso')
	console.log('Salvando styles.min.css')
	fs.writeFileSync('styles.min.css',result.css.toString())
	console.log('Salvo styles.min.css')
 }
 })

 
