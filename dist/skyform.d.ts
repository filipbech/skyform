interface PublicSkyFormMethods {
    add(DOMElement: Element): void;
    update(): void;
}
interface Window {
    skyform?: PublicSkyFormMethods;
}
interface skyformFields {
    add(element: Element, fn: any): void;
    remove(Element: any): void;
    update(Element: any): void;
}
interface skyformMethods {
    addHover(element: Element, wrap: Element): void;
    addFocus(element: Element, wrap: Element): void;
    addActive(element: Element, wrap: Element): void;
    moveId(element: Element, wrap: Element): void;
}
interface skyformRadios {
    add(String: any, any: any): void;
    update(String: any): void;
    remove(String: any, any: any): void;
}
