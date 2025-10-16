import type { RouteRecordRaw } from "vue-router";

export const loadedRoutes: {
    [key: string]: RouteRecordRaw[]
} = {};

export function loadRoutes() {
    const modules = import.meta.glob<{
        default: {
            parent: string,
            routes: RouteRecordRaw[]
        }
    }>('@/**/routes/routes.ts', { eager: true });
    
    Object.values(modules).forEach((module) => {
        if(!loadedRoutes[module.default.parent]) loadedRoutes[module.default.parent] = [];
        
        loadedRoutes[module.default.parent].push(...module.default.routes);
    });
}