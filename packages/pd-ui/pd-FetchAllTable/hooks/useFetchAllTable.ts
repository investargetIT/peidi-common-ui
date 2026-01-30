import axios from "axios";
import { ref } from "vue";
import type { Ref } from "vue";

interface RequestConfig {
  url: string;
  token: string;
  timeout?: number;
  params?: Record<string, any>;
}

interface ResponseData<T = any> {
  code: number;
  data: T;
  [key: string]: any;
}

export interface FetchAllDataReturn<T = any> {
  fetchData: (config: RequestConfig) => Promise<ResponseData<T> | null>;
  loading: Ref<boolean>;
}

export const useFetchAllTable = <T = any>(): FetchAllDataReturn<T> => {
  const loading = ref(false);

  const fetchData = async (
    config: RequestConfig,
  ): Promise<ResponseData<T> | null> => {
    try {
      loading.value = true;

      const response = await axios({
        url: config.url,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: config.token,
        },
        params: {
          pageNo: 1,
          pageSize: 10e4, // 大数值以获取所有数据
          ...config.params,
        },
        timeout: config.timeout || 1000 * 30,
      });

      if (response.data.code === 200) {
        // console.log("成功获取表格数据:", response.data);
        return response.data;
      } else {
        console.error("请求失败:", response.data);
        return null;
      }
    } catch (error) {
      console.error("请求出错:", error);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchData,
    loading,
  };
};
