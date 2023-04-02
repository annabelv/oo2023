interface CalculatingFunction{
    calculate(x: number):number;
}

class dlToG implements CalculatingFunction{
	calculate(dl: number):number{
		return dl*100;
	}
}

class gToDl implements CalculatingFunction{
    calculate(g: number):number{
        return g/100;
    }
}

class dlToMl implements CalculatingFunction{
	calculate(dl: number):number{
		return dl*100;
	}
}

class mlToDl implements CalculatingFunction{
    calculate(ml: number):number{
        return ml/100;
    }
}

export{
	dlToG
}
export{
	gToDl
}
export{
	dlToMl
}
export{
	mlToDl
}
