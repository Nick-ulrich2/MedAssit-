- Dans la syntaxe jsx, toujours avoir un element racine. il peut prendre le nom de <Fragment></Fragment> ou simplement etre <></>
- Toutes les balises doivent etre automatiquement fermees meme pour toutes les balises html qui n'ont pas besoin d'etre fermee. Dans notre temps soit nous utilisons ue balise autofermante soit nous utilisons une balise fermante
- C'est possible de faire de l'interpolation (mettre des balises partout a l'aide de cette syntax): {nomBalise} a l'endroit ou l'on veut apres avoir declaree la variable au prealable
- Les proprietes css comme background-color devront etre ecrites en camelCase donc backgroundColor
- preventDefault() dans le cas d'un formulaire empeche la soumission automatique des datas

- La fonction setInterval(callback, timeout) de js permet de declencher un traitement a interval de temps regulier. Callback est le traitement a executer tandis que timeout est le temps separant 2 executions en millisecondes sauf si clearInterval() est appele pour stopper la boucle.

- La methode useState() permet de definir les variables reactives dans un composant. Elle est definie dans React et est appelee un HOOK.
Pour l'utiliser, il suffit de l'importer depuis 'react' comme ceci
import { useState } from "react";
NB: Si une variable n'est pas reactive, la modification de sa valeur n'affectera pas l'affichage

- on utilise pas de hook dans une boucle, une condition, etc car il alloue un espace memoire qui doit etre gere en ordre


Jour 2: Maitriser l'ecriture du code jsx dans les composants React

1. Utiliser les composants REACT.FRAGMENT

    Etape1: Utiliser la balise <React.Fragment>
    - Elle est definie par le module react et est importee par import React from react;

    Etape2: Utiliser la balise <Fragment>
    - Idem que la premiere balise mais importee par import { Fragment } from react;


    Etape3: Utiliser la balise <>
    - Elle n'a besoin d'aucune inclusion

2. Inserer du code js dans du jsx

    1. Ecrire une condition en jsx
    La première façon d’écrire la condition est de l’intégrer dans une fonction JavaScript qui est immédiatement appelée. Cela permet de produire immédiatement le code JSX à utiliser

    operateur ternaire en js
    Condition ? instruction1 : instruction2

    2. Ecrire une boucle en jsx
    Étape 1 – Écrire la boucle JSX en utilisant une fonction immédiatement appelée
    Étape 2 – Utilisation de l’attribut key dans les éléments JSX affichés par une boucle