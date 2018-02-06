var argv = require('yargs')
    .command('hello','Greet te user',function(yargs) {
        yargs.options({
            name:{
                demand:true,
                alias:'n',
                description:'Your Firstname goes here',
                type:'string'
            },
            lastname:{
                demand:true,
                alias:'l',
                description:'Your Lastname goes here',
                type:'string'       
            }
        }).help('help');
    })
    .command('get','some description',function(yargs) {
        
    })
    .help('help')
    .argv;
var command = argv._[0];
console.log(argv);
if(command == 'hello' && typeof argv.name != 'undefined')
{
    console.log('Hello '+argv.name+'!');
}else if(command == 'hello' && typeof argv.name != 'undefined' && typeof argv.lastname != 'undefined')
{
    console.log('Hello '+argv.lastname+" "+argv.name+'!');
}
else if(command == 'hello')
{
    console.log('Hello worlds')
}  