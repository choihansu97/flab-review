import { rest } from 'msw';

export const handlers = [
    rest.get('/tech', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    thumbnail: 'sample1.png',
                    title: '토스 프론트엔드 챕터를 소개합니다!.',
                    content:
                        '토스에서 프론트엔드 개발자가 일하는 방법과 맡고 있는 역할에 대해 소개드립니다.',
                    createDate: '2023,02,01',
                },
                {
                    id: 2,
                    thumbnail: 'sample2.png',
                    title: '웹 서비스 캐시 똑똑하게 다루기',
                    content:
                        '웹 성능을 위해 꼭 필요한 캐시, 제대로 설정하기 쉽지 않습니다. 토스 프론트엔드 챕터에서 올바르게 캐시를 설정하기 위한 노하우를 공유합니다.',
                    createDate: '2023,02,02',
                },
                {
                    id: 3,
                    thumbnail: 'sample3.png',
                    title: 'JSCodeShift로기술 부채 청산하기',
                    content:
                        '기술 부채는 개발할수록 쌓여만 갑니다. 프론트엔드 챕터가 JSCodeShift를 이용하여 순식간에 100개 서비스의 기술 부채를 해결한 경험을 소개합니다.',
                    createDate: '2023,02,03',
                },
                {
                    id: 4,
                    thumbnail: 'sample4.png',
                    title: 'Template Literal Types로 타입 안전하게 코딩하기',
                    content:
                        'TypeScript 코드베이스의 타입 안전성을 한 단계 올려줄 수 있는 Template Literal Type의 뜻과 응용에 대해 알아봅니다.',
                    createDate: '2023,02,04',
                },
                {
                    id: 5,
                    thumbnail: 'sample5.png',
                    title: 'node_modules로부터 우리를 구원해 줄 Yarn Berry',
                    content:
                        '토스 프론트엔드 레포지토리 대부분에서 사용하고 있는 패키지 매니저 Yarn Berry. 채택하게 된 배경과 사용하면서 좋았던 점을 공유합니다.',
                    createDate: '2023,02,05',
                },
                {
                    id: 6,
                    thumbnail: 'sample6.png',
                    title: '개발자의 애질리티',
                    content:
                        '이 글은 토스페이먼츠에 입사하신, 혹은 입사를 고려 중인 개발자분들을 위해 작성된 글입니다. 애자일하게 일한다는 것은 어떠한 의미일까요?.',
                    createDate: '2023,02,06',
                },
                {
                    id: 7,
                    thumbnail: 'sample7.png',
                    title: '조금만 신경써서 초기 렌더링 빠르게 하기(feat. JAM Stack)',
                    content:
                        'SPA(Single Page Application) 구조로 웹 프론트엔드 애플리케이션이 개발되면서 초기 렌더링 속도는 프런트엔드 개발자에게 중요한 과제 중 하나가 되었습니다. 사용자 경험에 영향을 줄 수 있는 가장 큰 요소 중 하나가 바로 속도이기 때문입니다.',
                    createDate: '2023,02,07',
                },
                {
                    id: 8,
                    thumbnail: 'sample8.png',
                    title: '에러 핸들링을 다른 클래스에게 위임하기 (Kotlin 100% 활용).',
                    content:
                        'Kotlin의 Result로 MSA에서 에러가 전파되지 않는 안전한 환경을 만드는 방법을 알아봅니다.',
                    createDate: '2023,02,08',
                },
                {
                    id: 9,
                    thumbnail: 'sample9.png',
                    title: '테스트 의존성 관리로 높은 품질의 테스트 코드 유지하기.',
                    content:
                        '혹시 테스트 코드에서도 의존성을 관리해본 적이 있으실까요? 해당 포스트에서는 Gradle의 java-test-fixtures 플러그인을 사용하여 테스트 의존성 관리를 통해 높은 품질의 테스트 코드를 유지하는 방법을 알아봅니다. ',
                    createDate: '2023,02,09',
                },
                {
                    id: 10,
                    thumbnail: 'sample10.png',
                    title: '토스증권 QA Team을 소개합니다..',
                    content:
                        '이 글은 토스증권 QA Team에 입사를 고려중인 지원자들을 위해 작성된 글입니다. 토스증권 QA MANAGER하는 역활과 일하는 방식은 어떻게 다를까요?',
                    createDate: '2023,02,10',
                },
            ])
        );
    }),

    rest.get('/article/:id', (req, res, ctx) => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                id: `${id}`,
                thumbnail: `sample${id}.png`,
                title: `콘텐츠내용입니다.`,
                content: `콘텐츠${id}입니다.`,
                createDate: `2023,02,${id}`,
            })
        );
    }),
];
