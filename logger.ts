export default function log(...args:any[]):void{
    if ('undefined' === typeof args || !Array.isArray(args) || args.length<0) throw new Error('...args:any[] NOT FOUND');
    if (args.some((e: any) => typeof e !== 'string')) {
        let non_strings = args.filter((e: any) => typeof e !== 'string');
        let newArgs = [];
        for (let arg of args.filter((a: string) => typeof a === 'string')){
            newArgs.push(arg)
        }
        console.log(...non_strings, newArgs.join('').replace(/,/g, ' '));
        return;
    }
    let string = `${args.join('')}`;
    console.log(string)
}
