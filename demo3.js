import { map, catchError, tap, delay, switchMap } from 'rxjs/operators';
import got from 'got';
import { from, of, zip } from 'rxjs';

export default class Demo3 {
    $obtenerCarne = from(got.get('http://localhost:3000/tienda?ingrediente=carne')).pipe(map(r => JSON.parse(r.body)));
    $obtenerHarina = from(got.get('http://localhost:3000/tienda?ingrediente=harina')).pipe(map(r => JSON.parse(r.body)));
    $obtenerCilantro = from(got.get('http://localhost:3000/tienda?ingrediente=cilantro')).pipe(map(r => JSON.parse(r.body)));
    $obtenerPerejil = from(got.get('http://localhost:3000/tienda?ingrediente=perejil')).pipe(map(r => JSON.parse(r.body)));

    start() {
        this.startTheRecipe();
    }

    startTheRecipe() {
        zip([
            this.$obtenerCarne,
            this.$obtenerHarina,
            this.$obtenerCilantro.pipe(
                catchError((error) => this.$obtenerPerejil)
            )
        ]).pipe(
            switchMap((ingredientes) => this.cocinar(ingredientes)),
            tap(saltena => console.log('Anotando la receta...'))
        ).subscribe({
            next: (value) => console.log("Recipe result!", value),
            error: (error) => console.error("Error!", error.message)
        });
    }

    cocinar(ingredientes) {
        if (ingredientes.length) {
            return of(new Saltena(ingredientes)).pipe(
                delay(5000)
            );
        }
        throw new Error('Como voy a cocinar sin ingredientes!')
    }
}

class Saltena {
    _ingredientes = [];
    constructor(ingredientes) {
        this._ingredientes = ingredientes;
    }
}