# Documentation moteur de document
 
## Affichage d'une variable

`var` = `123`

`{{ var }}` affichera `123`

## Valeur par défaut

`var` ne vaut rien

`{{ var | default("________") }}` affichera `_________`

## Format des dates

`var` = `2020-03-30`

| Source                            | Affichage |
| ----------------------------------|----------------|
| `{{ var \| date() }}`              | `2020-03-30` |
| `{{ var \| date("%d/%m/%Y") }}`    | `30/03/2020` |
| `{{ var \| date("%A %e %B %Y") }}` | `Lundi 30 mars 2020` |
| `{{ var \| date("%e %b %y") }}`    | `30 mar 20` |

Tous les formats disponibles sur https://www.php.net/manual/fr/function.strftime.php

## Liste

`var` = `[1, 2, 3]`

<table>
<tr><th> Source </th><th> Affichage </th></tr>
<tr><td>`{{ var \| join(", ") }}`         </td><td>`1, 2, 3`    </td></tr> 
<tr><td>`{{ var \| join(" ; ") }}`        </td><td>`1 ; 2 ; 3`    </td></tr> 
<tr><td>`{{ var \| join("\n") \| nl2br }}`</td><td>```1
2
3
```
</td></tr>
</table>

## Nombre

`var` = `123456.789`

| Source                            | Affichage |
| ----------------------------------|----------------|
| `{{ var \| number("full") }}` | `cent vingt-trois mille quatre cent cinquante-six virgule sept huit neuf` | 
| `{{ var \| number(0) }}`      | `123 457` | 
| `{{ var \| number(1) }}`      | `123 456,8` | 
| `{{ var \| number(2) }}`      | `123 456,79` | 
| `{{ var \| number(3) }}`      | `123 456,789` | 
| `{{ var \| number(4) }}`      | `123 456,7890` | 
| `{{ var \| number(5) }}`      | `123 456,78900` | 
| `{{ var \| number(0, "€") }}`      | `123 457 €` | 
| `{{ var \| number(2, "m²") }}`      | `123 456,79 m²` | 
| `{{ var \| number(3, "%") }}`      | `123 456,789 %` | 

## Condition

`var` = `NON`

`{% if var == "OUI" %}`

texte non affiché

`{% else %}`

texte affiché

`{% endif %}`

*Attention à bien utiliser le double "="*

*la partie du "else" est facultative*

Suite du programme.

User
Loyer : {{ user.location_loyer }}

Donnée inexistante : {{ user.does_not_exists }}

Tel : {{ user.some_tel }}





