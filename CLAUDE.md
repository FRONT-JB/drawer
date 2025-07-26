# Claude Code 프로젝트 설정

## 커밋 메시지 이모지 규칙

커밋 메시지 앞에 다음 이모지를 사용해주세요:

- ✨ feat: 새로운 기능 추가
- 🐛 fix: 버그 수정
- ♻️ refactor: 코드 리팩토링
- 📝 docs: 문서 변경
- 💄 style: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- ✅ test: 테스트 추가 또는 수정
- 🔧 chore: 빌드 프로세스, 보조 도구 변경
- ⚡ perf: 성능 개선
- 👷 ci: CI/CD 관련 변경
- 📦 build: 빌드 시스템 또는 외부 의존성 변경
- ⏪ revert: 이전 커밋 되돌리기

## 예시

```bash
git commit -m "✨ feat: 사용자 로그인 기능 추가"
git commit -m "🐛 fix: 로그인 시 비밀번호 검증 오류 수정"
git commit -m "📝 docs: README.md에 설치 가이드 추가"
```

## 커밋 규칙

- 커밋 메시지에 "🤖 Generated with [Claude Code]" 문구를 추가하지 마세요
- "Co-Authored-By: Claude" 라인을 추가하지 마세요
- 커밋 메시지는 이모지와 간단한 설명만 포함해야 합니다
