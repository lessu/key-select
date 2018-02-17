
interface Object{

    select : <T>(keys:(keyof T)[]) => {[K in keyof T] :T[K]};
}

