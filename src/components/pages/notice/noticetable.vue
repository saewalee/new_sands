<template>
  <section class="notice-table">
    <div class="sands-con">
      <div class="title2">
        <h3>Notice</h3>
        <h2>공지사항</h2>
      </div>

      <div class="notice-top">
        <div>
          <span
            >새 글:
            <em>0</em>
          </span>
          <span
            >전체 :
            <em>0</em>
          </span>
        </div>
        <form action="">
          <fieldset>
            <legend></legend>
            <div class="select-box">
              <select id="purpose-select" name="purpose-select">
                <option value="" disabled selected>분류</option>
                <option value="가격문의">안내</option>
                <option value="인터뷰요청">공지</option>
                <option value="계약문의">공고</option>
                <option value="계약문의">소식</option>
              </select>
              <img src="@/images/selectarrow.svg" alt="" />
            </div>

            <div class="input-box">
              <input type="text" />
              <button>
                <img src="@/images/noticesearchicon.svg" alt="검색 버튼" />
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div class="notice-body">
        <table>
          <thead>
            <tr>
              <th class="notice-body__num">번호</th>
              <th class="notice-body__category">분류</th>
              <th class="notice-body__title">제목</th>
              <th class="notice-body__day">등록일</th>
              <th class="notice-body__view">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
            <tr>
              <td class="notice-body__num">0</td>
              <td class="notice-body__category">
                <span>공지</span>
              </td>
              <td class="notice-body__title">
                <a href="#">
                  <span
                    >공지사항 제목입니다. 공지사항 제목입니다. 공지사항
                    제목입니다. 공지사항 제목입니다.공지사항 제목입니다.
                    공지사항 제목입니다.</span
                  >
                </a>
              </td>
              <td class="notice-body__day">2024. 08. 15</td>
              <td class="notice-body__view">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="notice-pagination">
        <button>
          <img src="@/images/previous1.svg" alt="맨 처음으로" />
        </button>
        <button>
          <img src="@/images/previous2.svg" alt="이전 버튼" />
        </button>

        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>

        <button><img src="@/images/next2.svg" alt="다음 버튼" /></button>
        <button><img src="@/images/next1.svg" alt="" /></button>
      </div>
    </div>
  </section>
</template>
