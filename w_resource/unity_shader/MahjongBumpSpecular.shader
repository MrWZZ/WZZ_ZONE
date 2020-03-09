Shader "Mahjong/BumpSpecular"
{
	Properties
	{
		_MainTex ("Texture", 2D) = "white" {}
		_Diffuse ("Diffuse",Color) = (1,1,1,1)
		_Specular ("Specular",Color) = (1,1,1,1)
		_Gloss ("Gloss",Range(8,20)) = 8
		_BumpTex ("DumpTex",2D) = "bump" {}
		_BumpScale ("DumpScale",Range(-3,3)) = 1
	}
	SubShader
	{
		Tags { "RenderType"="Opaque" "LightMode" = "ForwardBase"}
		LOD 100

		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			
			#include "UnityCG.cginc"
			#include "Lighting.cginc"

			struct appdata
			{
				float4 vertex : POSITION;
				float3 normal : NORMAL;
				float4 tangent : TANGENT;
				float2 uv : TEXCOORD0;
			};

			struct v2f
			{
				float4 vertex : SV_POSITION;
				float2 uv : TEXCOORD0;
				float3 tanLightDir : TEXCOORD1;
				float3 tanViewDir : TEXCOORD2;
			};

			sampler2D _MainTex;
			sampler2D _BumpTex;
			fixed3 _Diffuse;
			fixed3 _Specular;
			fixed  _Gloss;
			fixed  _BumpScale;

			v2f vert (appdata v)
			{
				v2f o;
				TANGENT_SPACE_ROTATION;
				o.vertex = UnityObjectToClipPos(v.vertex);
				o.uv = v.uv;
				o.tanLightDir = mul(rotation, ObjSpaceLightDir(v.vertex));
			    o.tanViewDir = mul(rotation, ObjSpaceViewDir(v.vertex));
				return o;
			}
			
			fixed4 frag (v2f i) : SV_Target
			{
				fixed3 col = tex2D(_MainTex, i.uv).rgb;
				fixed3 ambient = UNITY_LIGHTMODEL_AMBIENT.xyz;
				float3 tanNormal = UnpackNormal(tex2D(_BumpTex, i.uv));
				float3 tanLightDir = normalize(i.tanLightDir);
				float3 tanViewDir = normalize(i.tanViewDir);
				tanNormal.xy *= _BumpScale;
				tanNormal.z = sqrt(1.0 - saturate(dot(tanNormal.xy,tanNormal.xy)));

				fixed3 diffuse = _LightColor0.rgb * _Diffuse * saturate(dot(tanNormal,tanLightDir));
				
				float3 halfDir = normalize(tanLightDir + tanViewDir);
				fixed3 specular = _LightColor0 * _Specular * pow(max(0,dot(tanNormal , halfDir)),_Gloss);

				return fixed4(col * (ambient + diffuse + specular),1.0);
				
			}
			ENDCG
		}
	}

	Fallback "Specular"
}
