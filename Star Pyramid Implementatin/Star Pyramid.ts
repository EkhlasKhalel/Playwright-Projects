

function Pyramid(height: number): void {
    let result = "";

    for (let i = 1; i <= height; i++) {    

        for (let j = 1; j <= i; j++) {   
            result += "*";
        }
        result += "\n";                    
    }

    console.log(result);
}

Pyramid(7);