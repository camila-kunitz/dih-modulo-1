## Quando o useReducer é preferível em relação ao useState? Cite 1 exemplo.

O _useReducer_ é geralmente preferível em relação ao _useState_ quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior.

Um exemplo é uma calculadora, onde dependendo da ação disparada, o _reducer_ executa uma operação diferente, retornando diferentes valores de acordo com o a ação escolhida.
