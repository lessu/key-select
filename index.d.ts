
interface Object{
    //  select : (keys:(keyof this)[]) => {[K in keyof this] :any};
     select : <T>(keys:(keyof T)[]) => {[K in keyof T] :T[K]};
}

