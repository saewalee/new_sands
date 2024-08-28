<template>
  <section class="comparison">
    <div class="sands-con">
      <div class="title2">
        <h3>Comparison</h3>
        <h2>CTX 비교</h2>
      </div>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th colspan="2">기능분류</th>
              <th>
                <div>
                  <img src="@/images/ctxlogo.svg" alt="" />
                </div>
              </th>
              <th>A사</th>
              <th>B사</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4" class="comparison-table__row">수집 및 검색</td>
              <td class="comparison-table__category">1일 수집량</td>
              <td class="comparison-table__ctx">평균 약 200만개</td>
              <td>평균 약 45만개</td>
              <td>평균 약 15만개</td>
            </tr>
            <tr>
              <td class="comparison-table__category">사용자 업로드</td>
              <td class="comparison-table__ctx">O</td>
              <td>O</td>
              <td>O</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                업로드 최대 파일 크기
                <p>(분석 가능 파일 크기)</p>
              </td>
              <td class="comparison-table__ctx">2GB</td>
              <td>200MB</td>
              <td>256MB</td>
            </tr>
            <tr>
              <td class="comparison-table__category">검색 종류</td>
              <td class="comparison-table__ctx">
                Hash, Tag, Keyword (검색 지원 키워드),<br />
                AI, 공격그룹, 공격기법, CVE, 위협 유형
              </td>
              <td>
                Hash / URL / IP<br />
                / Hostname / Tag
              </td>
              <td>
                Hash / URL / IP<br />
                / Hostname / Tag
              </td>
            </tr>
            <tr>
              <td rowspan="4" class="comparison-table__row">파일분석</td>
              <td class="comparison-table__category">
                머신러닝 기반 악성 분석
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>O</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                머신러닝 기반 악성코드 분류
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>O</td>
            </tr>
            <tr>
              <td class="comparison-table__category">IoC 연관관계 정보 제공</td>
              <td class="comparison-table__ctx">O</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                STIX 포맷 인터페이스 제공
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>X</td>
            </tr>

            <tr>
              <td rowspan="6" class="comparison-table__row">프로파일링</td>
              <td class="comparison-table__category">프로파일링 정보 제공</td>
              <td class="comparison-table__ctx">O</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">공격 그룹 정보 재공</td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                캠페인 (공격 시나리오)<br />정보 제공
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                공격 그룹 클러스터링 정보 제공
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                공격 기법 정보 제공<br />(MITRE ATT&CK)
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                Feed (TI 정보 역제공) 기능
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>X</td>
            </tr>

            <tr>
              <td rowspan="3" class="comparison-table__row">편의 기능</td>
              <td class="comparison-table__category">API</td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>O</td>
            </tr>
            <tr>
              <td class="comparison-table__category">악성코드 데이터셋 제공</td>
              <td class="comparison-table__ctx">O</td>
              <td>X</td>
              <td>O</td>
            </tr>
            <tr>
              <td class="comparison-table__category">
                추가 인텔리전스<br />보고서 제공
              </td>
              <td class="comparison-table__ctx">O</td>
              <td>O</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
