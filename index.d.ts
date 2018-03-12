
interface Object{
    select : <T>(keys:(keyof T)[]) => {[K in keyof T] :T[K]};
}
export function select<U,T>(object : U , keys : (keyof T)[]) : {[K in keyof T] : T[K]};

