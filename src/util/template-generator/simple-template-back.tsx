class BackTemplate {

    generate(answer: string, description?: string): string {
        let template = `
        <div class="container">

    <!-- Example Card with Answer and Description -->
    <div class="column">
        <article class="es-art-container">
            <div class="es-art-content">
                <h2 class="es-answer m-x-0">${answer}</h2>
                <p class="es-description m-x-0 m-t-1-2">${description}</p>
            </div>
        </article>
    </div>

    <!-- Example complement with Code -->
    <!-- <div class="column">
        <article class="es-art-container-code">
            <div class="es-art-content-code">
                <h3 class="es-code-lang m-x-0 m-b-1">Java</h3>
                <ol type="1" class="es-code m-x-0">
                    <li class="es-code-line">
                        <pre><span class="orange">import</span> java.util.Scanner;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre><span class="orange">public</span> <span class="orange">class</span> <span class="rose">Calculadora</span> {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>  <span class="orange">public</span> <span class="orange">static</span> <span class="orange">void</span> <span class="rose">main</span>(String[] args) {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    Scanner scanner = new Scanner(System.in);</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Mostrar mensaje de bienvenida</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("**Calculadora simple**");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("---------------------");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Solicitar los números al usuario</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.print("Introduzca el primer número: ");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">int</span> numero1 = scanner.nextInt();</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.print("Introduzca el segundo número: ");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">int</span> numero2 = scanner.nextInt();</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Mostrar un menú de opciones</span></pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("\nElija una operación:");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("1. Suma");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("2. Resta");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("3. Multiplicación");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("4. División");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Leer la opción seleccionada por el usuario</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">int</span> opcion = scanner.nextInt();</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Realizar la operación según la opción seleccionada</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">int</span> resultado = 0;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">switch</span> (opcion) {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="orange">case</span> <span class="blue">1</span>:</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        resultado = numero1 + numero2;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        <span class="orange">break</span>;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="orange">case</span> <span class="blue">2</span>:</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        resultado = numero1 - numero2;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        <span class="orange">break</span>;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="orange">case</span> <span class="blue">3</span>:</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        resultado = numero1 * numero2;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        <span class="orange">break</span>;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="orange">case</span> <span class="blue">4</span>:</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        <span class="orange">if</span> (numero2 == 0) {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>          System.out.println("Error: no se puede dividir por 0");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        } <span class="orange">else</span> {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>          resultado = numero1 / numero2;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        }</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        <span class="orange">break</span>;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="orange">default</span>:</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>        System.out.println("Opción no válida");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    }</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Mostrar el resultado</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    <span class="orange">if</span> (opcion >= 1 && opcion <= 4) {</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>      <span class="highlight">System.out.println("\nEl resultado de la operación es: " + resultado)</span>;</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    }</pre>
                    </li>
                    <li class="es-code-line">
                        <pre></pre>
                    </li>
                    <li class="es-code-line">
                        <pre class="gray">    // Mensaje de despedida</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>    System.out.println("\nGracias por usar la Calculadora");</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>  }</pre>
                    </li>
                    <li class="es-code-line">
                        <pre>}</pre>
                    </li>

                </ol>
            </div>
        </article>
    </div> -->

</div>

<style>
    :root {
        --color-backgroud: #0E0033;

        --color-purple: #7470fa;
        --color-purple-900: #817efa;
        --color-purple-800: #8f8cfb;
        --color-purple-700: #9d9afb;
        --color-purple-600: #aba9fc;
        --color-purple-500: #b9b7fc;
        --color-purple-400: #c7c5fd;
        --color-purple-300: #d5d4fd;
        --color-purple-200: #e3e2fe;
        --color-purple-100: #f1f0fe;

        --color-blue: #0079FF;
        --color-blue-900: #1986ff;
        --color-blue-800: #3293ff;
        --color-blue-700: #4ca1ff;
        --color-blue-600: #66aeff;
        --color-blue-500: #7fbcff;
        --color-blue-400: #99c9ff;
        --color-blue-300: #b2d6ff;
        --color-blue-200: #cce4ff;
        --color-blue-100: #e5f1ff;

        --color-green: #00dfa2;
        --color-green-900: #19e2ab;
        --color-green-800: #32e5b4;
        --color-green-700: #4ce8bd;
        --color-green: #66ebc7;
        --color-green-500: #7fefd0;
        --color-green-400: #99f2d9;
        --color-green-300: #b2f5e3;
        --color-green-200: #ccf8ec;
        --color-green-100: #e5fbf5;

        --color-rose: #ff0060;
        --color-rose-900: #ff196f;
        --color-rose-800: #ff327f;
        --color-rose-700: #ff4c8f;
        --color-rose-600: #ff669f;
        --color-rose-500: #ff7faf;
        --color-rose-400: #ff99bf;
        --color-rose-300: #ffb2cf;
        --color-rose-200: #ffccdf;
        --color-rose-100: #ffe5ef;

        --color-yellow: #f6fa70;
        --color-yellow-900: #f6fa7e;
        --color-yellow-800: #f7fb8c;
        --color-yellow-700: #f8fb9a;
        --color-yellow-600: #f9fca9;
        --color-yellow-500: #fafcb7;
        --color-yellow-400: #fbfdc5;
        --color-yellow-300: #fcfdd4;
        --color-yellow-200: #fdfee2;
        --color-yellow-100: #fefef0;

        --color-orange: #dfa200;
        --color-orange-900: #e2ab19;
        --color-orange-800: #e5b432;
        --color-orange-700: #e8bd4c;
        --color-orange-600: #ebc766;
        --color-orange-500: #efd07f;
        --color-orange-400: #f2d999;
        --color-orange-300: #f5e3b2;
        --color-orange-200: #f8eccc;
        --color-orange-100: #fbf5e5;


        --color-gray-1000: #000000;
        --color-gray-900: #191919;
        --color-gray-800: #323232;
        --color-gray-700: #4c4c4c;
        --color-gray-600: #666666;
        --color-gray-500: #7f7f7f;
        --color-gray-400: #999999;
        --color-gray-300: #b2b2b2;
        --color-gray-200: #cccccc;
        --color-gray-100: #e5e5e5;
        --color-white: #fff;

        --border-card: 1.8rem;
        --padding-inner-card: 0.5rem;
        --padding-inner-card-description: 1.8rem;
        --border-inner-card: calc(var(--border-card) - 0.5rem);
    }

    body {
        background-color: var(--color-backgroud);
        font-family: Garamond, serif;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .column {
        flex: 1;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .m-x-0 {
        margin-top: 0rem;
        margin-bottom: 0rem;
    }

    .m-t-1-2 {
        margin-top: 0.5rem;
    }

    .m-t-1 {
        margin-top: 1rem;
    }

    .m-b-1 {
        margin-bottom: 1rem;
    }

    .es-art-container {
        border-radius: var(--border-card);
        background: var(--color-green);
        background: linear-gradient(180deg, var(--color-green) 0%, var(--color-purple-400) 100%);
        padding: var(--padding-inner-card);
    }

    .es-art-container-code {
        border-radius: var(--border-card);
        background: var(--color-purple-400);
        background: linear-gradient(180deg, var(--color-purple-400) 0%, var(--color-purple) 100%);
        padding: var(--padding-inner-card);
    }

    .es-art-content {
        background-color: var(--color-backgroud);
        border-radius: var(--border-inner-card);
        padding: var(--padding-inner-card-description);
    }

    .es-art-content-code {
        background-color: var(--color-backgroud);
        border-radius: var(--border-inner-card);
        padding: var(--padding-inner-card-description);
    }

    .es-question {
        text-align: center;
        font-size: x-large;
        color: var(--color-purple-400);
        text-shadow: var(--color-green) 0 0 1rem;
    }

    .es-question span {
        border-bottom: 0.16rem solid var(--color-green);
        border-radius: 0.2rem;
    }

    .es-answer {
        text-align: center;
        font-size: large;
        color: var(--color-purple-400);
        text-shadow: var(--color-green) 0 0 1rem;
    }

    .es-answer span {
        border-bottom: 0.16rem solid var(--color-green);
        border-radius: 0.2rem;
    }

    .es-description {
        color: var(--color-purple-100);
        text-shadow: var(--color-green) 0 0 0.4rem;
    }

    .es-code {
        font-size: xx-small;
        font-family: 'Courier New', Courier, monospace;
    }

    .es-code-lang {
        color: var(--color-green);
    }

    .es-code-line {
        width: 100%;
        color: var(--color-gray-200);
    }

    .es-code-line pre {
        margin: 0;
    }

    .es-code-line .highlight {
        color: var(--color-green);
        text-shadow: var(--color-green) 0 0 0.4rem;
        border: 0.01rem solid var(--color-rose);
        border-radius: 0.2rem;
        padding: 0.02rem;
        padding-left: 0.1rem;
        padding-bottom: 0.1rem;
    }

    .es-code-line .blue {
        color: var(--color-blue);
    }

    .es-code-line .green {
        color: var(--color-green);
    }

    .es-code-line .rose {
        color: var(--color-rose);
    }

    .es-code-line .yellow {
        color: var(--color-yellow);
    }

    .es-code-line .orange {
        color: var(--color-orange);
    }

    .es-code-line .gray {
        color: var(--color-gray-700);
    }

    .es-code-line .white {
        color: var(--color-white);
    }
</style>
        `;

        return template;
    }
}

export default BackTemplate;