// AuthProvider 을 사용하기 위한 커스텀 훅(Hook) 생성

import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export function useAuth() {
    const context = useContext(AuthContext);

    // AuthContext가 없다면 에러를 발생시킴
    if (!context) {
        throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.');
    }

    return context;
}